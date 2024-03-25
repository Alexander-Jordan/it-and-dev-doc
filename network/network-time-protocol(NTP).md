# Network Time Protocol (NTP)

NTP is used to synchronize computers and programs in a network.
Without it, computers and programs can get into issues when the server is not synced with the client.
Especially if the server is ahead of the client, confusing it with a timestamp that hasn't happened yet.

How does it sync over the network, which is bound to introduce latency?

## NTP packet

The NTP packet contains data to be used by the client and server to communicate with eachother.

4 datapoints are in 64-bit timestamp format, that are used to sync the client and server:

- Reference Timestamp
    This field is the time the system clock was last set or corrected.
- Originate Timestamp
    This value is the time at which the request departed the client for the server.
- Receive Timestamp
    This value is the time at which the client request arrived at the server.
- Transmit Timestamp
    This value is the time at which the reply departed the server for the client.

The client will first send a packet with the `originate timestamp` (T1) set to the time when the packet was sent.

The server then replies with the same packet but modified, setting the `receive timestamp` (T2) to the time when the server received the packet from the client.
It will also set the `transmit timestamp` (T3) to the time when the server sent back the packet.

Finally the client sets the `destination timestamp` (T4) to the time when the packet from the server was received by the client.

## Synchronize using T1, T2, T3, T4

The client then uses these 4 timestamps to calculate 2 values:

1. The delay
    The time that was needed to transfer the packet in the network.
2. The offset
    The time difference of the 2 computer clocks.

**The delay:**
```
(T4 - T1) - (T3 - T2)
```

**The offset**
```
((T2 - T1) + (T3 - T4)) / 2
```

The client will use these 2 values to sync it's clock with the server.

## More accurate

To result to even more accurate timeclocks this is done not only once, but a number of time and with a number of different NTP servers.

## Hierarchy and Stratum

NTP servers are ordered in a hierarchy, each level being called `Stratum`, followed by a number.
They range from 0 to 15, zero being atom clocks, aka `Reference clock`.
Any level beyond Stratum 15 indicates that the device is unsynchronized and not trust-worthy.

Stratum 0 is never used as an NTP server, but only to sync Stratum 1 NTP servers, which sync their time with the reference clock.
Stratum 1 servers are also known as `Primary time servers`.

For each layer of NTP servers, the Stratum number increase, indicating how far away from the reference clock it is.

## Network protocol and port

NTP servers use the `UDP` protocol over port `123`.

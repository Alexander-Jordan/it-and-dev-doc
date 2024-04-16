<script>
    import FamilyNode from "./FamilyNode.svelte";

    let familyStructure = [
    {
        isParent: true,
        name: 'Chris',
        children: [
            {
                isParent: true,
                name: 'Moe',
                children: [
                    {
                        isParent: false,
                        name: 'Julie'
                    }
                ]
            }
        ]
    },
    { isParent: false, name: 'Anna' }
];
</script>

{#each familyStructure as familyMember}
    <FamilyNode member={familyMember} />
{/each}

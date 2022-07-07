<template>
    <div>
        <input 
            type="text" 
            placeholder="Full Name" 
            @input="e => changeFullName(e.target.value)" 
        />
    </div>
</template>

<script>
export default {
    name: 'FullName',
    props: ['changeFullName']
}
</script>
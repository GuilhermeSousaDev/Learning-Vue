<template>
    <div>
        <ul>
            <h1>Menu</h1>
            <router-link to="/" tag="li" active-class="active" exact>
                <a>Home</a>
            </router-link>
            <router-link to="/user" tag="li" active-class="active">
                <a>User</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style>
    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: black;
        color: white;
        padding: 0.5rem;
    }
    li {
        list-style-type: none;
        margin-left: 30px;
    }
    a {
        text-decoration: none;
    }
    .active {
        color: black;
        background: white;
        padding: 0.3rem;
        border-radius: 5px;
    }
</style>
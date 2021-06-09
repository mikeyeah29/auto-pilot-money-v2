<template>
    <div id="app" class="font-body">
        <router-view/>
        <error-box />
    </div>
</template>
<script type="text/javascript">
    
    import ErrorBox from './components/ErrorBox';

    export default {
        name: 'App',
        components: {
            ErrorBox
        }
    }

</script>
<style lang="scss">

    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Red+Hat+Display&display=swap');

    $color-light: #f8f1f1;
    $color-dark: #19456b;
    $color-brand: #11698e;
    $color-accent: #16c79a;
    $color-danger: #da3b3b;
    $color-success: #2ece68;

    body {
        color: $color-dark;
        background: $color-light;
    }

    .txt-light { color: $color-light; }
    .txt-dark { color: $color-dark; }
    .txt-brand { color: $color-brand; }
    .txt-light { color: $color-light; }
    .txt-danger { color: $color-danger; }
    .txt-success { color: $color-success; }

    .bg-light { background: $color-light; }
    .bg-dark { background: $color-dark; }
    .bg-brand { background: $color-brand; }
    .bg-accent { background: $color-accent; }
    .bg-danger { background: $color-danger; }
    .bg-success { background: $color-success; }

    .border-danger { border: solid 1px $color-danger; }

    .container {
        width: 90% !important;
        max-width: 500px !important;
    }

    .loading {
        position: relative;
    }
    .loading:before {
        content: '';
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        line-height: 100%;
        height: 100%;
        z-index: 3;
        text-align: center;
        color: $color-dark;
        background-color: $color-light;
        background-image: url('/img/loading.svg');
        background-repeat: no-repeat;
        background-position: center;
    }
    
</style>
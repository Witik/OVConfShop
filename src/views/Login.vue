<template>
    <b-container id="loginContainer">
        <ValidationObserver slim v-slot="{ passes }">
            <h1>Login</h1>
            <b-form @submit.prevent="passes(doLogin)">
                <TextInputWithValidation
                        rules="required|email"
                        type="email"
                        label="Email address:"
                        name="Email"
                        v-model="email"
                        placeholder="Enter email"
                />
                <TextInputWithValidation
                        rules="required"
                        name="Password"
                        vid="password"
                        type="password"
                        label="Password"
                        v-model="password"
                        placeholder="Enter password"
                />
                <b-form-group>
                    <b-button type="submit" variant="primary">Login</b-button>
                    <b-form-invalid-feedback :force-show="!!error">{{ error }}</b-form-invalid-feedback>
                </b-form-group>
            </b-form>
        </ValidationObserver>
    </b-container>
</template>
<script>
    import auth from "@/firebase/auth";
    import TextInputWithValidation from "@/components/input/TextInputWithValidation";

    export default {
        name: 'login',
        data() {
            return {
                email: "",
                password: "",
                error: null,
                redirect: this.$route.query.redirect || '/'
            }
        },
        components: {
            TextInputWithValidation
        },
        methods: {
            doLogin() {
                auth.signInWithEmailAndPassword(this.email, this.password)
                    .catch((e) => this.error = e.message);
            }
        },
        created() {
            auth.onAuthStateChanged(user => {
                if (user) {
                    this.$router.replace(this.redirect);
                }
            })
        }
    }
</script>
<style>
    #loginContainer {
        max-width: 500px;
    }
</style>
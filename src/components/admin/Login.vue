<template>
    <div id="AdminLogin">
        <div class="login-img">
            <div>
                <img src="../../../public/static/img/icon/ghost_icon.svg"/>
            </div>
        </div>
        <div class="login-from">
            <h1>Sign to admin</h1>
            <div class="login-error" v-show="!login_state">Incorrect username or password.</div>
            <from>
                <div>
                    <label>Username</label>
                    <input :class="[{'input-error' : !login_state}]" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" :class="[{'input-error' : !login_state}]"/>
                </div>
                <div>
                    <button @click="test()">Sign in</button>
                </div>
            </from>
        </div>
    </div>
</template>

<script>
    import {reactive, toRefs} from 'vue'
    export default {
        name: "Login",
        setup() {
            const state = reactive({
                login_state: true
            })
            const {login_state} = toRefs(state)

            const test = () => {
                state.login_state = false
                console.log(state.login_state = false)
            }
            return {
                login_state,test
            }
        }
    }
</script>

<style scoped lang="less">
    #AdminLogin {
        width: 100vw;
        height: 100vh;
        background-color: #f9f9f9;

        .login-img {
            div {
                padding: 43px 0px 24px 0px;
                img {
                    display: block;
                    margin: auto;
                    width: 80px;
                }
            }
        }

        .login-from {
            margin: auto;
            text-align: center;
            h1 {
                display: inline-block;
                margin: auto;
                font-size: 24px;
                font-weight: 300;
                letter-spacing: -.5px;
                color: #23292E;
                font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
            }
            .login-error {
                width: 302px;
                height: 51px;
                line-height: 51px;
                background-color: #FFEEF0;
                margin: 20px auto 17px auto;
                font-size: 13px;
                font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
                box-sizing: border-box;
                border: 1px #EFBBC1 solid;
                border-radius: 5px;
            }
            from {
                width: 260px;
                border: 1px solid #EAECEF;
                border-radius: 5px;
                margin-top: 16px!important;
                display: block;
                margin: auto;
                padding: 20px;
                background-color: #fff;
                background-color: #F6F8FA;

                div {
                    width: 100%;
                    text-align: left;
                    font-size: 14px;
                    label {
                        display: block;
                        font-weight: 600;
                        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
                        line-height: 1.5;
                        color: #24292e;
                        cursor: default;
                    }
                    input {
                        /*width: calc(100% - 24px);*/
                        width: 100%;
                        padding: 5px 12px;
                        border: 1px solid #E1E4E8;
                        margin-top: 5px;
                        margin-bottom: 15px;
                        padding: 5px 12px;
                        font-size: 14px;
                        line-height: 20px;
                        border-radius: 6px;
                        background-color: #fff;
                    }
                    .input-error {
                        background-color: #FFEEF0;
                    }
                    input:focus {
                        border: 1px solid #0068D0;
                        box-shadow:0px 0px 3px 3px #B3D2F1;
                    }
                    button {
                        width: 100%;
                        height: 32px;
                        background-color: #00a457;
                        border: 1px #00a457 solid;
                        border-radius: 6px;
                        color: #fff;
                        margin: 5px 0px 0px 0px;
                    }
                    button:hover {
                        border: 1px #009752 solid;
                        background-color: #009752;
                    }
                }
            }
        }
    }
</style>

const app = new Vue({
    el: "#app",
    data: {
        emails: [],
    },
    created() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((elm) => {
                console.log(elm.data.response);
                this.emails.push(elm.data.response);
                    
                
            })
        }
       
    }
})
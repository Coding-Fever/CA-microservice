const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        Once upon a time, a developer 👩‍💻 deployed an app 🏗️ on GKE (Google Kubernetes Engine) ⚡. 
        The app worked perfectly inside the cluster, but... there was a problem! 😱
        
        Nobody outside could access it! 🚫🌍
        
        So, the developer decided to create an Ingress 🏗️. 
        First, they set up a Service 🎯 to expose the app inside the cluster. 
        Then, they defined an Ingress resource 📜 to handle external traffic 🌎➡🔀➡🛡.
        
        GKE automatically provisioned a Load Balancer 🌐⚖, 
        mapped the domain 🌍🔗, and secured it with SSL/TLS 🔐. 
        Finally, users could reach the app smoothly! 🎉🎯
        
        Now, traffic flows perfectly 💨, users are happy 😃, 
        and the developer? Relaxing with a coffee ☕.
        
        Moral of the story: Ingress is the gateway to the world! 🚪🌎✨
    `);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

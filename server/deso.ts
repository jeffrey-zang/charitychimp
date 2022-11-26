const Deso = require('deso-protocol');

async () => {
    const deso = new Deso();
    const request = "3";
    const response = await deso.identity.login(request);
}
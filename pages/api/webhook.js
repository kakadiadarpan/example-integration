async function webhook(req, res) {
    if (req?.body.type) {
        console.log('Webhook type', req.body.type);
    } else {
        console.log('No data');
    }
    return res.status(200).send('Received.');
}

export default webhook;
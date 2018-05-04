const express = require('express')
const bodyParser = require('body-parser');
const app = express()


app.use(bodyParser.text({type: "*/*"}))

app.post('/post', (req, res) => {
	const body = req.body;
	console.log("query => ", req.query);
	console.log("body => ", body);
	
	res.status(500).send(body);
	//res.send(body);

	
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
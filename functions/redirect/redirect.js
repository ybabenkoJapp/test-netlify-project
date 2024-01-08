const handler = async function (event, context) {
  console.log({event, context});
  try {
    console.log({event, context});
    return {
      statusCode: 302,
      body: JSON.stringify({message: 'worked'})
    }
  } catch ({message}) {
    console.log(message)
  }
  // const redirectUrl = 'https://google.com'
  // return {
  //   statusCode: 302,
  //   headers: {
  //     Location: redirectUrl,
  //     'Cache-Control': 'no-cache',
  //   },
  //   body: JSON.stringify({})
  // }
}

module.exports = { handler };

const jwt = require('jsonwebtoken')

const jwtTest = () => {
    try {
        // create a jwt payload -- the data that is encoded
        const payload = {
            // user information -- public info so do not put any secrets here (such as passwords)
            name: 'Weston',
            id: '1234',
            email: 'w@b.com'
            // do not put the password in the payload!
        }
        // 'sign' jwt by supplying a secret to hash in the signature
        const secret = 'my super big secret'
        // jwt.sign({ payload to encode }, 'secret to create signature', { options })
        const token = jwt.sign(payload, secret, { expiresIn: '1h' })
        console.log(token)
        // head (specifies encoding standard for the jwt): eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
        // payload (encoded data): eyJuYW1lIjoiV2VzdG9uIiwiaWQiOiIxMjM0IiwiZW1haWwiOiJ3QGIuY29tIiwiaWF0IjoxNjY1MDgyMjM3fQ.
        // signature (hash of the payload and secret): FqdXTXduTt5GKjHTJxb0H-2LAUWSYUmDILGwQ42j44k


        // signing a token will log a user in
        // jwt.verify(token, 'secret')
        const decode = jwt.verify(token, secret)
        // when we decode jwts we will check the signature to make sure the user's login is valid, this authorizes the user
        console.log(decode)
    } catch(err) {
        console.warn(err)
    }
}

jwtTest()

const serviceAccountConfig = {
    "type": "service_account",
    "project_id": "akr-iot-notifications",
    "private_key_id": "ed44598e6232dee222ff58a56f47476c84625f94",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDmVAYueivO1+oa\nLjVXO/3ciLMgFETbLJE1vXMIL7rYygts7AWM4eMag0OasUMSmtq7ES+PPnrUWAnF\nB6Cd8HSrZ2mBwhx3v8A9rd5A4GnUaE6mnzqSy5RJoDrp7IpBFceowesXwKM4PXFb\nR9UfTTL/kF5YiS/rDT30xrGCEe85GIJjQgjwBTFNLfoduAxatCmR3afEWo7fKJOr\nYlreXPBxTX6oZ9TYhRUl8/AwpagI1rSAO1Hx2AVL8dEc//ooZDOSdzT+PEOAAGln\nJwCQZo/InBrXK+Oki7voqRxI3jYBlZPavd+CdNJC9s7XZk7dc6R5wbHtmM6G+cVs\nQHA2TmbJAgMBAAECggEACBuCTbHDd8ASJ5qDimbsUk5WBs2r2E6u7FY3Nb0vXajs\nAskij2FWpATllO0DLEUa6K2Lz+YePvn72w2ADfssMindVQHTDHSJlOo5Oe2kUAOd\nbCBL+KWVmktbc4c93RliCirMRo1jeWvxQOosAnJuVoBbj9CBaSvRx9tUHXzZ37ev\n67wgPZAXAVF1IvxxrPWnGEzY63Sjrz8gZ7Gh6SGMuWHP/S9t5E0/5T0ns2Tp8o1X\noHrwVvtDDLJ6MRnQSlh6bUQ/nxeCKoDMIyzeTe0NxgskWPaZqy+EcrHGqe+lbMox\nDlD3oRY8ULb9OTtF+3MGE5JkSCkpTylRUTtDnewtAQKBgQD1Tldqzf+vZKFHrSCK\nVEzCdt62QfBg80Ir7mNf1cIbNRck+5CWhLOtrfo8B4AknbW9iC5OswI2Z6RDai0C\nT3WbCS2iu0BsxP+UIRykWnIh10SXcNiacWUnbpxPeCwiFfxwc+Ig9QFKItcAih/y\nUxp/2cb2qdvblp5WU/UlTQcbyQKBgQDwXocbES+2DElz3xHrp2cT4ZZ62Jeihlbj\nDH1oj+YTGJ0gERX9bKVzdHlibIWejhg4OgfYPQ/tODkXZJ2TG7GgtQvwPtXpu7b6\npYuv67rXGzOnSaULVB3eIA3XoBjI1y4fTw1a67zP8bQybh+C3uGGjDO7cGkujQXH\ngcO6h2xzAQKBgFHMw/3Ln71/EwDxzG4UWlxmgzHHnz7VH3XC0sR8ZXPpKkSc1sQ6\nkCgUYeNupN6Q8K+5H6gCrXQy72XDnCqvEIqYbu1a/8rFjmx49jIgLvr169uMN86Y\njaCuk9U0P5NGPZ3KJtfSm5F7OLLnXGvUJnwHxP8v+S6qdTZYXOEJZJtxAoGANRFZ\nmMM5mmKqENft9+4UltIWS/bnu20XX7dRNLWYYRztC7hZ94J2IMBVUEKPWYsbk8ZU\nFwycKI5iJGUFWQYjOEzgXuEwjxLvefT0mxlbPcR2qfdbZd3jXjgLdlCVSDohp63n\nT+x92hcN5phjgpw8hF0NytMtlaZy4TIoCVV+vwECgYEAu7XzXm+70y3sOTFX3YOK\nFi9dbcOpix61+Xo7et1RVuNyZ8ShF989RZlgG7HiZVMx8RBdC8vOz0oQoN3hrpQf\ny5/8lpwC6CHfl8K9hMQ40ydtcdrEgbMPRJCUhtDrjdistlJsT66/vt9ffSlUrsP0\nBVCG6wXx1NqGmSELsKWP/JA=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-rsudr@akr-iot-notifications.iam.gserviceaccount.com",
    "client_id": "111403164598316596683",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-rsudr%40akr-iot-notifications.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }
  

const firestoreConfig = {
    "databaseURL": "https://ace-career-tracker.asia-south1.firebaseio.com"
}

module.exports = {
    serviceAccountConfig,
    firestoreConfig,
}
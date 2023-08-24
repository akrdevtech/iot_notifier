
const serviceAccountConfig = {
    "type": "service_account",
    "project_id": "ace-career-tracker",
    "private_key_id": "a7076d158e4d15ce51a49feb0f1a8fcef800f60c",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDLbm0NETX7M790\n/R6/xL9htum1lHCqxhlyVsVpvL3WwMZfMUwZrUQhmHn8wzI4mpqgN24HsQESP8Sa\nSZZAbHJnCTN8YEyxbJIV5EcSbyquR5n78pUyMhT5jHFlfxVOP2tsUJpVNPfN+phe\nQBmruDNQE3z67mL+8BTf+mcYNcJqohDiZIXQWSu647V7jZdr02H6YnL6GhzU0I81\niy95Bjqt54GrciQ2wJor9I3dZUz331G/C2ejyuwzzjzWE8TIhANnwLg4M9DwHYkI\nFEspwCYh6teQJH0nghldwAcA9zy2+19jLQIVeNSRW4Me5aFddKKTQ7WG8feVsno8\n1AQ0/uppAgMBAAECggEAEa2uueI7QfGBC5pck/c113jFDhPQh7Kv7u0F+lad274E\nbyzSS2/wegftX+8Zm+wpkE9I10/FQ0/51pua/E3AUl5tFDutJoUEG/VqzLoO6DbO\nNaQi3YoXIwmWqCaXVCW0QOUvSETSXRrQJ26kHHVlNin/ZDIXtcZo1f8Fewfe9ZOo\nkBQ+/igL38PS8JQtAvnQ8ApdfUdOv9+XDcvfLRpYk4AaiGyAgbJ7p8MKQmAV5Hzw\nw8tF3MGdYqgJzV96gp9oNGs6EU67I+kf3RhMBGZ851MDnY5IM5ssKShsApcW/GA1\ntVgcljTkxlnX2fDqrw2HkaMlDHvr4rXHAzAoSNDR1QKBgQD7oe/8tDjF1ihqMM+o\nIyAso38zhg/8aH3lFYQZcDhZPBc/mUWX8u7FYC9lUhCXnQmFnwMfOUqlYktWKS4a\nFPHAIe0lJO8H+l0QNeDB7riNeghMpXUvsyh6SiW8HgiQ24C9M04+M74GICl+dfpn\nfI23WWoNx6g08+It2pfa2UKDLQKBgQDO9lG4AhCvzKExC7HZs4fkVc537/mg+4R7\nvfkhYqWB+m4evUBLksNaUcSM9FzpM3d4X4ttje8JpA8w6fLgRAhDe5ylg6ywTHWP\n53dwV4+wwd6cvHVlTivCurX8OU9a02P5n3/soCkAZI8n/SGh039Wg3UBIp39n2mr\nCccL1rx5rQKBgEGdM1fgoqEru7Qc8Dj2l9Ar/eIwhgCaOqG+n4iGk5rpKWLDE7uQ\ndCRxdUplQMBYCYCXOxgsN0OywtQ/vq68YWFpN04lOFMLPLMaaXYISoVRmdJqnokG\nnXpt1TMdXbxwEDzFoRRlJ5qvTkKUfuv3NXjmztmzAzBzm7m7Mze0yTwtAoGAPcqf\nRXAgaUyQR+N0+0m15f+UgIy+nEjcGlHzAvu/7JnHrRfWDXpJJztIkskWwG2kWuUz\n7Ma2ussn2fPPlxPY38UVVPmGYrDBXPC/4WPTO/P2Mhe2eUOonyA924uE3NpGfC4Z\n9J0xALQFZewW0Yki+MKQ+YDLaQDifLWTnz5C0ZUCgYASsuaxGtK/g+Hn9M3Vyc0C\nQ5IhDT6XLEIKX1M7wr2cl6q4KILoXIa62UzcdPHaqdFaAIpc6p1vNhdWp0aOWR/p\nQ77B4ih3/Mtm325XMF82TTGeUbsPuX6srObXHE2AB90jzQO02zjdOrv9r6CKA0Do\n7rf8Euu8RQaDV+WOx76TSA==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-95tpy@ace-career-tracker.iam.gserviceaccount.com",
    "client_id": "107603204448253870812",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-95tpy%40ace-career-tracker.iam.gserviceaccount.com"
}

const firestoreConfig = {
    "databaseURL": "https://ace-career-tracker.asia-south1.firebaseio.com"
}

module.exports = {
    serviceAccountConfig,
    firestoreConfig,
}
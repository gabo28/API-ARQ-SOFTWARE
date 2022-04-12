

const all = async (req: any, res: any) => {
    res.status(200).json({
        version: '0.0.1',
        endpoints: {
            createUser:{
                type: 'POST',
                url:{
                    dev: 'http://127.0.0.1:5001/poli-services/us-central1/app/users',
                    pdn: 'https://us-central1-poli-services.cloudfunctions.net/app/users'
                }
            },
            listAllUsers:{
                type: 'GET',
                url:{
                    dev: 'http://127.0.0.1:5001/poli-services/us-central1/app/users',
                    pdn: 'https://us-central1-poli-services.cloudfunctions.net/app/users'
                }
            }
        }
    })
  }

  export { all }
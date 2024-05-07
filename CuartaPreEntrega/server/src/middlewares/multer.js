import multer from 'multer'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { document } = req.body

    let destinationFolder
    switch (document) {
      case 'identification':
        destinationFolder = 'src/public/uploads/documents/identification'
        break
      case 'address':
        destinationFolder = 'src/public/uploads/documents/address'
        break
      case 'status':
        destinationFolder = 'src/public/uploads/documents/status'
        break
      case 'profileImg':
        destinationFolder = 'src/public/uploads/profiles'
        break
      case 'productImg':
        destinationFolder = 'src/public/uploads/products'
        break
      default:
        cb(new Error('Invalid document type'))
    }
    cb(null, destinationFolder)
  },
  filename: function (req, res, cb) {
    const { uId } = req.params
    const { document } = req.bodyd
    let newFileName
    switch (document) {
      case 'identification':
        newFileName = `${uId}-${document}.${file.originalname}`
        break
      case 'address':
        newFileName = `${uId}-${document}.${file.originalname}`
        break
      case 'status':
        newFileName = `${uId}-${document}.${file.originalname}`
        break
      case 'profileImg':
        newFileName = `${uId}-${document}.${file.originalname}`
        break
      case 'productImg':
        newFileName = `${uId}-${document}.${file.originalname}`
        break
      default:
        cb(new Error('Invalid document type'))
    }
    cb(null, newFileName)
  },
})

const uploader = multer({ storage: storage })

export default uploader

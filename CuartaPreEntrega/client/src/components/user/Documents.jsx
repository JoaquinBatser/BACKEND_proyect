import React, { useContext, useState } from 'react'
import { uploadDocs } from '../../api/fetch.js'
import { UserContext } from '../../context/UserContext.jsx'

const Documents = () => {
  const [identification, setIdentification] = useState()
  const [address, setAddress] = useState()
  const [status, setStatus] = useState()
  const { user } = useContext(UserContext)

  const uploadDocsFunction = async (e) => {
    e.preventDefault()
    const docs = {
      identification,
      address,
      status,
    }
    await uploadDocs({ docs, uId: user._id })
  }

  return (
    <form
      method="post"
      enctype="multipart/form-data"
      onSubmit={uploadDocsFunction}
    >
      <input
        type="file"
        name="identification"
        onChange={(e) => {
          setIdentification(e.target.files[0])
        }}
      />
      <input
        type="file"
        name="address"
        onChange={(e) => {
          setAddress(e.target.files[0])
        }}
      />
      <input
        type="file"
        name="status"
        onChange={(e) => {
          setStatus(e.target.files[0])
        }}
      />
      <button type="submit">Subir documentos</button>
    </form>
  )
}

export default Documents

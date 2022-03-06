import React from 'react'
import { Layout } from '../../components/shared';

const Send = () => {
  return (
    <div>New Transaction Page</div>
  )
}

Send.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Send;
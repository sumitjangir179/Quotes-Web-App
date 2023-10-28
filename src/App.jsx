import { React, useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Title, Button, Radio } from './components/index'
import conf from './conf/conf'

const App = () => {
  const [quote, setQuote] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [defaultValue, setDefaultValue] = useState('happiness')

  const headers = { 'X-Api-Key': `${conf.apiKey}` }
  const option = { headers }

  const getQuote = () => {
    axios.get(`/quotes?category=${defaultValue}`, option)
      .then((res) => { setQuote(res.data[0].quote) })
      .catch(() => { setError(true) })
      .finally(() => { setLoading(false) })
  }

  useEffect((() => { getQuote() }), [])


  if (error) {
    return <Title>Something Went Wrong</Title>
  }

  return (
    <section>
      <Container>
        {loading ? <Title>Loading...</Title> : <Title>{quote}</Title>}
        <Button onClick={getQuote}>Quote</Button>
        <Radio name='quote' value='happiness' checked={defaultValue === 'happiness'} onChange={(e) => { setDefaultValue(e.target.value) }} />
        <Radio name='quote' value='god' checked={defaultValue === 'god'} onChange={(e) => { setDefaultValue(e.target.value) }} />
        <Radio name='quote' value='computers' checked={defaultValue === 'computers'} onChange={(e) => { setDefaultValue(e.target.value) }} />
        <Radio name='quote' value='famous' checked={defaultValue === 'famous'} onChange={(e) => { setDefaultValue(e.target.value) }} />
        <Radio name='quote' value='friendship' checked={defaultValue === 'friendship'} onChange={(e) => { setDefaultValue(e.target.value) }} />
        <Radio name='quote' value='humor' checked={defaultValue === 'humor'} onChange={(e) => { setDefaultValue(e.target.value) }} />
        <Radio name='quote' value='art' checked={defaultValue === 'art'} onChange={(e) => { setDefaultValue(e.target.value) }} />
        <Radio name='quote' value='failure' checked={defaultValue === 'failure'} onChange={(e) => { setDefaultValue(e.target.value) }} />
        <Radio name='quote' value='imagination' checked={defaultValue === 'imagination'} onChange={(e) => { setDefaultValue(e.target.value) }} />
        <Radio name='quote' value='inspirational' checked={defaultValue === 'inspirational'} onChange={(e) => { setDefaultValue(e.target.value) }} />
        <Radio name='quote' value='leadership' checked={defaultValue === 'leadership'} onChange={(e) => { setDefaultValue(e.target.value) }} />
        <Radio name='quote' value='knowledge' checked={defaultValue === 'knowledge'} onChange={(e) => { setDefaultValue(e.target.value) }} />
      </Container>
    </section>
  )
}

export default App
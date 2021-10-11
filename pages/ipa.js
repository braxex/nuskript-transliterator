import { useState } from 'react'
// components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Input from '../src/components/Input'

export default function IpaTransliterator() {
  const [response, setResponse] = useState(null)
  return (
    <>
      <Typography variant="h3" align="center" sx={{ m: '2rem', fontWeight: 'bold' }}>
        IPA to Nuskrîpt
      </Typography>
      <Input label="IPA" source="ipa" setResponse={setResponse} />
      <Box sx={{ m: '2rem', mx: '6rem' }}>
        {response && (
          <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', marginTop: '2rem' }}>
            Nuskrîpt: {response.nuskript}
          </Typography>
        )}
      </Box>
    </>
  )
}

import { useState } from 'react'
import { DateInput } from '@mantine/dates'
import { TimeInput } from '@mantine/dates'

export const Form = (props: any) => {
  const [value, setValue] = useState<Date | null>(null)
  return (
    <>
      <DateInput
        value={value}
        onChange={setValue}
        label="Date"
        placeholder=""
      />
      <TimeInput label="Time" description="" placeholder="" />
    </>
  )
}

export default Form

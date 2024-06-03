import { useState } from 'react'
import { DateInput } from '@mantine/dates'
import { TimeInput } from '@mantine/dates'
import { Button } from '@mantine/core'
import { Box, Group } from '@mantine/core'

export const Form = (props: any) => {
  const [value, setValue] = useState<Date | null>(null)
  return (
    <>
      <Box maw={340} mx="auto">
        <Group mb="xs">
          <DateInput
            value={value}
            onChange={setValue}
            label="Date"
            placeholder=""
          />
          <TimeInput label="Time" description="" placeholder="" />
        </Group>
        <Group mb="xs">
          <Button variant="filled">Save</Button>
        </Group>
      </Box>
    </>
  )
}

export default Form

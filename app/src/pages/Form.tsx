import { useState } from 'react'
import { DateInput } from '@mantine/dates'
import { Button } from '@mantine/core'
import { Box, Group } from '@mantine/core'
import { NumberInput } from '@mantine/core'

export const Form = (props: any) => {
  const getDefaultDate = (): Date => new Date()
  const [value, setValue] = useState<Date | null>(getDefaultDate())
  return (
    <>
      <Box maw={340} mx="auto">
        <Group mb="xs">
          <DateInput
            size="xs"
            value={value}
            onChange={setValue}
            label="Date"
            placeholder=""
          />
        </Group>
        <Group mb="xs">
          <NumberInput
            size="xs"
            label="Duration (hour)"
            placeholder=""
            decimalScale={1}
            fixedDecimalScale
            defaultValue={1}
          />
        </Group>
        <Group mb="xs">
          <Button variant="filled">Save</Button>
        </Group>
      </Box>
    </>
  )
}

export default Form

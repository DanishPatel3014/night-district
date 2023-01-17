import { Text } from '@chakra-ui/react'
import React from 'react'

export default function CustomPara({children,fontSize,color,marginBottom,textAlign}) {
  return (
    <Text
    fontSize={fontSize ?? '16px'}
    color={color ?? '#fff'}
    textAlign={textAlign ?? 'left'}
    marginBottom={marginBottom ?? '10px'}
    >{children}</Text>
  )
}

import { HStack } from "@chakra-ui/react"
import { FC } from "react"

import { TelegramIcon } from "../../icons/TelegramIcon"
import { TwitterIcon } from "../../icons/TwitterIcon"
import { IconLink } from "../IconLink/IconLink"
import { StatusBar } from "../StatusBar/StatusBar"

const socialMediaData = [
    { href: 'https://twitter.com/{_}', component: TwitterIcon },
    { href: 'https://t.me/{_}', component: TelegramIcon }
]

export const Footer: FC = () => {

    return (
        <HStack
            w="full"
            justifyContent="space-between"
        >
            <HStack spacing={5} >
                {socialMediaData.map(({ href, component }) => (
                    <IconLink 
                        href={href} 
                        IconComponent={component} 
                        key={href} 
                        isExternal 
                    />
                ))}
            </HStack>
            <StatusBar/>
        </HStack>

    )
}
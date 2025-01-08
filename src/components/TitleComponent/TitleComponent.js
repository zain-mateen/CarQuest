import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledTag = styled.p`
    ${({ size, type }) => {
        if (type !== 'p') {
        switch (type) {
            case 'h1':
                return tw`text-[74px] leading-[120%] font-bold max-2xl:text-[54px] max-l:text-[32px] tracking-[0.5px]`
            case 'h2':
                return tw`text-[40px] leading-[120%] font-bold max-xl:text-[32px] max-l:text-[24px] tracking-[0.5px]` 
            case 'h3':
                return tw`text-[28px] leading-[120%] font-bold max-xl:text-[24px] max-l:text-[20px] tracking-[0.5px]`
            case 'h4':
                return tw`text-[24px] leading-[120%] font-bold tracking-[0.5px]`
            case 'h5':
                return tw`text-lg tracking-[0.5px]`
            case 'h6':
                return tw`text-base tracking-[0.5px]`
            default:
                return tw`text-base tracking-[0.5px]`
        }
        } else {
            switch (size) {
                case 'extra-small-normal':
                    return tw`text-xs font-normal tracking-[0.5px]`
                case 'extra-small-medium':
                    return tw`text-xs font-medium tracking-[0.5px]`
                case 'extra-small-semibold':
                    return tw`text-xs font-bold tracking-[0.5px]`
                case 'small-normal':
                    return tw`text-sm font-normal tracking-[0.5px]`
                case 'small-medium':
                    return tw`text-sm font-medium tracking-[0.5px]`
                case 'small-semibold':
                    return tw`text-sm font-bold tracking-[0.5px]`
                case 'base-normal':
                    return tw`text-base font-normal max-l:text-sm tracking-[0.5px]`
                case 'base-medium':
                    return tw`text-base font-medium max-l:text-sm tracking-[0.5px]`
                case 'base-semibold':
                    return tw`text-base font-bold max-l:text-sm tracking-[0.5px]`
                case 'large-normal':
                    return tw`text-lg font-normal max-l:text-base max-l:leading-7 tracking-[0.5px]`
                case 'large-medium':
                    return tw`text-lg font-medium max-l:text-base max-l:leading-7 tracking-[0.5px]`
                case 'large-semibold':
                    return tw`text-lg font-bold max-l:text-base max-l:leading-7 tracking-[0.5px]`
                case 'extra-large-normal':
                    return tw`text-xl font-normal max-l:text-lg tracking-[0.5px]`
                case 'extra-large-medium':
                    return tw`text-xl font-medium max-l:text-lg tracking-[0.5px]`
                case 'extra-large-semibold':
                    return tw`text-xl font-bold max-l:text-lg tracking-[0.5px]`
                default:
                    return tw`text-base tracking-[0.5px]`
            }
        }
    }}
`

const TitleComponent = ({ type = 'p', size = 'base-normal', children, className = '' }) => {
    return (
        <StyledTag as={type} size={size} type={type} className={className}>
            {children}
        </StyledTag>
    )
}

TitleComponent.propTypes = {
    type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
    size: PropTypes.oneOf([
        'extra-small-normal', 'extra-small-medium', 'extra-small-semibold',
        'small-normal', 'small-medium', 'small-semibold',
        'base-normal', 'base-medium', 'base-semibold',
        'large-normal', 'large-medium', 'large-semibold',
        'extra-large-normal', 'extra-large-medium', 'extra-large-semibold'
    ]),
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default TitleComponent

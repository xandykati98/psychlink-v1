import { useRouter } from 'next/router'
import { CSSProperties } from 'react';

function ActiveLink({ children, href, activeStyle, className }: { className?: string, children: React.ReactNode; href: string, activeStyle?: CSSProperties }) {
    const router = useRouter()
    const style = {
        ...(router.asPath === href ? activeStyle : {})
    }

    const handleClick = (e:any) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a href={href} onClick={handleClick} style={style} className={className}>
            {children}
        </a>
    )
}

export default ActiveLink
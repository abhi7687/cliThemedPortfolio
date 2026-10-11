
import type { HTMLAttributes } from 'react'
import styles from './Container.module.css'

type ContainerProps = HTMLAttributes<HTMLDivElement>

function Container({ className, children, ...props }: ContainerProps) {
  const combinedClassName = className
    ? `${styles.container} ${className}`
    : styles.container

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  )
}

export default Container

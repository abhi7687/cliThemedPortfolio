
import styles from './TestConsole.module.css'

const demoTests = [
    { name: 'test_qa_internship', status: 'PASS' },
    { name: 'test_mobile_app_dev', status: 'PASS' },
    { name: 'test_hpe_tester_role', status: 'RUNNING' },
    { name: 'test_next_goal', status: 'QUEUED' },
] as const

function TestConsole() {
  return (
    <aside className={styles.console} aria-label="Illustrative test console demo">
      <div className={styles.header}>
        <span className={styles.terminalPrompt} aria-hidden="true">
          {'>'}
        </span>
        <span>running suite: hello_world</span>
        <span className={styles.demoLabel}>VISUAL DEMO</span>
      </div>

      <ul className={styles.testList}>
        {demoTests.map((test) => (
          <li className={styles.test} key={test.name}>
            <code>
                {test.name}
                {test.status === 'RUNNING' && (
                    <span className={styles.cursor} aria-hidden="true">
                        _
                    </span>
                )}
            </code>
            <span className={`${styles.status} ${styles[test.status.toLowerCase()]}`}>
                {test.status}
                {test.status === 'RUNNING' && (
                    <span className={styles.runningDots} aria-hidden="true">
                        ...
                    </span>
                )}
            </span>
          </li>
        ))}
      </ul>

      <div className={styles.assertion}>
        <code>[ASSERT: illustrative portfolio content]</code>
      </div>
    </aside>
  )
}

export default TestConsole

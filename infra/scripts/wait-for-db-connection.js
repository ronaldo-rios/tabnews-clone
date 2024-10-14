const { exec } = require('node:child_process')

function checkPostgres() {
  exec('docker exec postgres-dev pg_isready --host localhost', handleReturn)

  function handleReturn(error, stdout) {
    // Use recursion to keep checking until Postgres is ready
    if (stdout.search('accepting connections') === -1) {
      process.stdout.write('.')
      checkPostgres()
      return
    }

    console.log('\n🟢 Postgres is ready and accepting connections!\n')
  }
}

console.log('\n\n🔴 Waiting for Postgres to accept connections')
checkPostgres()

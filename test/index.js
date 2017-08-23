import test from 'ava'

import scanPorts from '..'

test(async t => {
  const ports = await scanPorts('npmjs.com', [80, 8000])
  t.deepEqual(ports, {
    80: true,
    8000: false,
  })
})

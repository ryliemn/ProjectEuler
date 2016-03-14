function timer(solutionFunction) {
  const iterations = 10000;
  let totalMs = 0;

  for (let i = 0; i < iterations; i++) {
    const start = new Date().getTime();
    solutionFunction();
    const end = new Date().getTime();
    totalMs += end - start;
  }

  const averageMs = totalMs / iterations;

  return averageMs;
}

exports.timer = timer;

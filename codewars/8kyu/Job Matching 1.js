function match(candidate, job) {
    if (!('minSalary' in candidate) || !('maxSalary' in job)) {
        throw new Error("Both candidate's minSalary and job's maxSalary must be present.");
    }
    const minSalaryWithWiggleRoom = candidate.minSalary * 0.9;
    return minSalaryWithWiggleRoom <= job.maxSalary;
}

function main() {
    const user = `BrunoJames`
    const sistem = `Windows10`
    console.log(displayAllertMsg(sistem, user));
}

function displayAllertMsg(sistem, use) {
    return `There's a new sign-in request on ${sistem} for your Google Account ${use}.`
}

main()


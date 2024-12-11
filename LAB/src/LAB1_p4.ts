function square(a: number): number {
    return a ** 2;
}

console.log("Square : ", square(5));



function sumofsquareseries(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + (i ** 2);
    }

    return sum;
}

console.log("Sum Of Square Series: ",sumofsquareseries(3));
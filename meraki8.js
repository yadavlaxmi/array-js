


number = [50, 40, 23, 70, 56, 12, 5, 10, 7]
i=0
max=0
while(i<number.length){
    if (number[i]>max)
        max=number[i]
    i=i+1
}
j=0
max2=0
while (j<number.length){
    if (number[j]<max)
        if (number[j]>max2)
            max2=number[j]
    j=j+1
}
console.log("second max  number:",max2)


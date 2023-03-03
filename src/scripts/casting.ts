namespace casting {
    var age: any = 26;

    (age as number).toFixed();
    (age as string).length;

    var name: string = 35 as unknown as string;
}
function filterUrl(url) {
    const filter = url.split("/");
    for (let i = 0; i < filter.length; i++) {
        if (/\./.test(filter[i])) {
            const result = filter[i].split('.');
            console.log(result)
            console.log(result.length)
            if (result.length <= 2) {
                return result[0]
            } else {
                for (let j = 0; j < result.length; j++) {
                    if (result[j].length >= 4) {
                        return result[j]
                    } else {
                        return result[1]

                    }
                };
            }

        };
    };
};


console.log(filterUrl("http://www.hr.com/carbonfive/raygun"));
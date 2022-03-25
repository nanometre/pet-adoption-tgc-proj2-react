// COLLECTION OF NON SPECIFIC MODULES
export function openInNewTab(url){
    window.open(url);
}

export function shuffled(array){
    return array.map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)
}


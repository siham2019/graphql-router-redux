export function edit(titre,langue) {
    return{
        type:"edit",
        titre:titre,
        langue:langue
    };
}
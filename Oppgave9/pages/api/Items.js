const items = []

export default function handler(req,res) {
    if(req.method === 'POST'){
        const { item } = req.body

        items.push(item)
        req.status(201).json(items)
    } else {
        req.status(200).json(items)
    }
}
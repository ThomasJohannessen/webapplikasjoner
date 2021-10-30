const list = ['item1','item2','item3']

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({list})
    }
}
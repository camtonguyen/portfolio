const prod = process.env.NODE_END === 'production';

module.exports = {
    'process.env.BASE_URL' : prod ? 'https://camtonguyen.herokuapp.com' : 'http://localhost:3000',
    'process.env.NAMESPACE': 'https://camtonguyen.herokuapp.com',
    'process.env.CLIENT_ID': 'fTP49scbvd9wdpuAlrv6KSCEguC7cHxP'
}
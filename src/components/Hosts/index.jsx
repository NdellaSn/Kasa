import './Hosts.scss'
function Hosts({ name, picture }) {
    return (
        <div className='logement__host'>
            <p className='logement__host_name'>{name}</p>
            <img className='logement__host_photo' src={picture} alt={name} />
        </div>
    )

}
export default Hosts
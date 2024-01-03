type Props = {
    permissions: undefined | string [];
}

export const Content = ({permissions} : Props) => {
    if(permissions === undefined){
        return null;
    }
    return permissions.includes('admin') ? (
        <p className="mt-4 text-l text-center">
            Some improtant stuff that only an admin can do
        </p>
    ):(
        <p className="mt-4 text-l text-center">
            Insufficient permissions
        </p>
    )
}
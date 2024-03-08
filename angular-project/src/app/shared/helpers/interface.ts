export interface MentorType{
    _id: string,
    email: string,
    civility: string,
    first_name: string,
    last_name: string,
    company: CompanyType,
    user_status: "pending" | "active"
    count_document: number

}

export interface CompanyType {
    name: string,
    user_type: string
}


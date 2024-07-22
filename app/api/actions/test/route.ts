import { ACTIONS_CORS_HEADERS } from "../../constants"
import { ActionGetResponse } from "../types"

export async function GET(request: Request) {
    const payload: ActionGetResponse = {
        icon: new URL("https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg").toString(),
        title: 'Test Title',
        description: 'This is a test',
        label: 'Test Label',
        links: {
            actions: [
                {
                    label: 'Buy 0.1 BTC',
                    href: ''
                },
                {
                    label: 'Buy 0.2 BTC',
                    href: ''
                }
            ]
        }
    }

    return Response.json(payload, {
        headers: ACTIONS_CORS_HEADERS
    })
}

export const OPTIONS = GET

export async function POST(request: Request) {
    // todo: construct transactions
    //const body = await request.json()
    return Response.json({ "msg": "ok post" }, {
        headers: ACTIONS_CORS_HEADERS
    })
}

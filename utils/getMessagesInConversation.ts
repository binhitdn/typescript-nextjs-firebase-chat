import {
	collection,
	DocumentData,
	orderBy,
	query,
	QueryDocumentSnapshot,
	Timestamp,
	where
} from 'firebase/firestore'
import { db } from '../config/firebase'
import { IMessage } from '../types'

export const generateQueryGetMessages = (conversationId?: string) =>
	query(
		collection(db, 'messages'),
		where('conversation_id', '==', conversationId),
		orderBy('sent_at', 'asc')
	)

export const transformMessage = (
	message: QueryDocumentSnapshot<DocumentData>
) =>
	({
		id: message.id,
		...message.data(), // spread out conversation_id, text, sent_at, user
		sent_at: message.data().sent_at
			? convertFirestoreTimestampToString(message.data().sent_at as Timestamp)
			: null
	} as IMessage)

export const convertFirestoreTimestampToString = (timestamp: Timestamp) =>
	new Date(timestamp.toDate().getTime()).toLocaleString()

export const convertFirestoreTimestampToString2 = (timestamp: Timestamp) => {
	let sencond = Math.floor((new Date() - new Date(timestamp.seconds * 1000)) / 1000)
	if (sencond < 180) {
		return 'Vừa mới truy cập'
	}
	if (sencond < 3600) {
		return `Truy cập ${Math.floor(sencond / 60)} phút trước`
	}
	if (sencond < 86400) {
		return `Truy cập ${Math.floor(sencond / 3600)} giờ trước`
	}
	if (sencond < 2592000) {
		return `Truy cập ${Math.floor(sencond / 86400)} ngày trước`
	}
	if (sencond < 31104000) {
		return `Truy cập ${Math.floor(sencond / 2592000)} tháng trước`
	}
	return `Truy cập ${Math.floor(sencond / 31104000)} năm trước`
}
	 

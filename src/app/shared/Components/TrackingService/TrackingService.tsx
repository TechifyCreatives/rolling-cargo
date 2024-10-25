import axios from 'axios';
import { TrackingResult } from '../TrackingResults/TrackingResults';

const API_BASE_URL = 'https://rolling-cargo.appspot.com/master';

export const trackShipment = async (waybill: string): Promise<TrackingResult[]> => {
  try {
    const response = await axios.get<TrackingResult[]>(`${API_BASE_URL}/websiteTrackingData`, {
      params: { waybill },
    });
    
    if (!response.data || response.data.length === 0) {
      throw new Error('No tracking information found for the given waybill number.');
    }
    
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Failed to fetch tracking information. Please try again.');
  }
};
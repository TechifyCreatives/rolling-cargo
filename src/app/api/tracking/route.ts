import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const waybill = searchParams.get('waybill');

  if (!waybill) {
    return NextResponse.json(
      { error: 'Waybill number is required' },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://rolling-cargo.appspot.com/master/websiteTrackingData?waybill=${waybill}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tracking data' },
      { status: 500 }
    );
  }
}
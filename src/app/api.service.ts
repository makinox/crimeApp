import {data as crimeCount} from '../db/crime_servers_count.json';
import {data as crimeData} from '../db/crime_servers_graph.json';

import {data as malwCount} from '../db/malware_count.json';
import {data as malwData} from '../db/malware_graph.json';

import {data as botsCount} from '../db/bots_count.json';
import {data as botsData} from '../db/bots_graph.json';

import {data as credCount} from '../db/credentials_count.json';
import {data as credData} from '../db/credentials_graph.json';

import {data as cardCount} from '../db/credit_cards_count.json';
import {data as cardData} from '../db/credit_cards_graph.json';

function getCounters() {
  return [
    crimeCount[0]['attributes']['count'],
    malwCount[0]['attributes']['count'],
    botsCount[0]['attributes']['count'],
    credCount[0]['attributes']['count'],
    cardCount[0]['attributes']['count']
  ]
}

function getCrimeData() {
  return [crimeData.map(e => e.attributes.count), crimeData.map(e => e.id)]
}

function getMalwData() {
  return [malwData.map(e => e.attributes.count), crimeData.map(e => e.id)]
}

function getBotsData() {
  return [botsData.map(e => e.attributes.count), crimeData.map(e => e.id)]
}

function getCredData() {
  return [credData.map(e => e.attributes.count), crimeData.map(e => e.id)]
}

function getCardData() {
  return [cardData.map(e => e.attributes.count), crimeData.map(e => e.id)]
}

export { getCounters, getCrimeData, getMalwData, getBotsData, getCredData, getCardData }

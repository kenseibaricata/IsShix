'use client'

import React, { useState } from 'react'
import { 
  Stethoscope, 
  FileText, 
  Users, 
  Shield, 
  Clock, 
  CheckCircle, 
  Zap,
  HeartHandshake,
  Brain,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react'

export default function IsShixLP() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-blue-100 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Stethoscope className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">医式 (IsShix)</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">機能</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">料金</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
            </nav>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              無料デモを申し込む
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              在宅医療の事務負担を
              <span className="text-blue-600">ゼロに</span>。
              <br />医式が実現します。
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              FAX処理からカルテ記録まで、AIで完全自動化。<br />
              導入翌日から業務改善を実感。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                無料デモを申し込む
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
                資料ダウンロード
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              業務の負担を減らし、診療に専念できる環境を
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-red-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                現在の課題
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  FAXの仕分けに1日2時間以上かかっている
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  カルテ記入の負担で診療時間が圧迫される
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  多職種間の情報共有が非効率
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  スタッフの残業時間が増加
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center">
                <Brain className="w-6 h-6 mr-2" />
                医式が提供する解決策
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  FAX自動振り分け（AI仕分け精度99%以上）
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  AIカルテ記事自動生成で記録時間を大幅削減
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  患者サマリー自動LINE通知で効率的な情報共有
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  多職種連携支援でチーム医療を促進
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              医式の主要機能
            </h2>
            <p className="text-xl text-gray-600">
              在宅医療の現場で求められる機能を、AIで高度に自動化
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">FAX自動振り分け</h3>
              <p className="text-gray-600">
                AIが文書内容を解析し、99%以上の精度で自動的に適切な部署や担当者に振り分けます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AIカルテ記事生成</h3>
              <p className="text-gray-600">
                診療内容から自動でカルテ記事を生成。迅速かつ正確な記録で業務時間を大幅に短縮します。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">LINE通知機能</h3>
              <p className="text-gray-600">
                患者サマリーや重要な情報を自動でLINE通知。チーム内での情報共有を効率化します。
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">多職種連携支援</h3>
              <p className="text-gray-600">
                医師、看護師、ケアマネージャーなど、多職種間での連携をスムーズにサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              導入効果と実績
            </h2>
            <p className="text-xl text-gray-600">
              医式導入により、月間160時間削減を達成し、常勤スタッフ1名分の余裕を創出
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">160</div>
              <div className="text-lg text-gray-700 font-semibold">時間/月削減</div>
              <div className="text-gray-600">常勤スタッフ1名分の業務量</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">99%</div>
              <div className="text-lg text-gray-700 font-semibold">AI仕分け精度</div>
              <div className="text-gray-600">高精度な自動処理を実現</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">80%</div>
              <div className="text-lg text-gray-700 font-semibold">記録時間短縮</div>
              <div className="text-gray-600">カルテ記入の大幅効率化</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">田中医院 院長</div>
                  <div className="text-gray-600">田中 太郎 先生</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                「業務効率化で診療時間が増え、患者様との向き合う時間をより多く確保できるようになりました。スタッフの負担も大幅に軽減されています。」
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">さくらクリニック 事務長</div>
                  <div className="text-gray-600">佐藤 花子 様</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                「AI監査機能により、ヒヤリハットが激減しました。医療安全の向上と業務効率化を同時に実現できています。」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              料金プラン
            </h2>
            <p className="text-xl text-gray-600">
              クリニックの規模とニーズに応じた3つのプランをご用意
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">5万円</div>
                <div className="text-gray-600">/ 月額</div>
                <div className="text-sm text-gray-500 mt-2">初期費用：30万円</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">FAX自動振り分け</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">LINE通知機能</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">基本サポート</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                お問い合わせ
              </button>
            </div>
            <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-8 relative hover:shadow-lg transition-shadow">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  人気
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">7.5万円</div>
                <div className="text-gray-600">/ 月額</div>
                <div className="text-sm text-gray-500 mt-2">初期費用：40万円</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Basic機能すべて</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">AIカルテ自動生成</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">患者サマリー機能</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">優先サポート</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                お問い合わせ
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">10万円</div>
                <div className="text-gray-600">/ 月額</div>
                <div className="text-sm text-gray-500 mt-2">初期費用：50万円</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Pro機能すべて</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">AI治療提案機能</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">高度な多職種連携</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">24時間優先サポート</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                お問い合わせ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              セキュリティ・規制対応
            </h2>
            <p className="text-xl text-gray-600">
              安全で安心な医療クラウド基盤を提供
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">FHIR標準対応</h3>
              <p className="text-gray-600">
                国際標準のFHIR（Fast Healthcare Interoperability Resources）に完全対応し、各種電子カルテとの連携を実現
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3省2ガイドライン遵守</h3>
              <p className="text-gray-600">
                厚生労働省、総務省、経済産業省が定める医療情報システムの安全管理ガイドラインに完全準拠
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">データ国内保管</h3>
              <p className="text-gray-600">
                すべての医療データは国内のセキュアなデータセンターで管理。法令遵守と高度なセキュリティを確保
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              よくある質問
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "導入にはどの程度の期間が必要ですか？",
                answer: "通常、お申し込みから本格運用開始までは2-4週間程度です。既存のシステム環境や連携の複雑さによって変動する場合があります。"
              },
              {
                question: "現在使用している電子カルテとの連携は可能ですか？",
                answer: "FHIR標準に対応しているため、多くの電子カルテシステムと連携可能です。詳細な対応状況については、お使いのシステム名をお教えいただければ個別にご案内いたします。"
              },
              {
                question: "患者データの保管・管理について教えてください",
                answer: "すべてのデータは国内の認定データセンターで暗号化して保管しています。3省2ガイドライン、個人情報保護法を遵守し、最高レベルのセキュリティを確保しています。"
              },
              {
                question: "サポート体制はどのようになっていますか？",
                answer: "プランに応じて平日9-18時の基本サポート、または24時間365日の優先サポートを提供しています。専門の技術者が迅速に対応いたします。"
              },
              {
                question: "無料トライアルは実施していますか？",
                answer: "はい、2週間の無料デモをご提供しています。実際の業務環境に近い形で医式の効果を体験していただけます。"
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              まずは無料デモを体験。
              <br />お気軽にご相談ください。
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              医式があなたのクリニックの業務をどのように変革するか、実際に体験してください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                無料デモを申し込む
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                資料請求
              </button>
            </div>
            <div className="mt-8 text-blue-100">
              <p className="text-sm">
                お電話でのお問い合わせ：0120-XXX-XXX（平日9:00-18:00）
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Stethoscope className="w-6 h-6" />
                <span className="text-lg font-bold">医式 (IsShix)</span>
              </div>
              <p className="text-gray-400 text-sm">
                全国の医療現場のノウハウと改善事例が、水のように自然で円滑に流通する仕組みを実現します。
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">サービス</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">機能詳細</a></li>
                <li><a href="#" className="hover:text-white transition-colors">料金プラン</a></li>
                <li><a href="#" className="hover:text-white transition-colors">導入事例</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">サポート</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">よくある質問</a></li>
                <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">技術サポート</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">会社情報</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">運営会社</a></li>
                <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-white transition-colors">利用規約</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 IsShix. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
